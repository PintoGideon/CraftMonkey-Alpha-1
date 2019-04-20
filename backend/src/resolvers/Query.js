const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
	items: forwardTo('db'),
	item: forwardTo('db'),
	itemsConnection: forwardTo('db'),
	me(parent, args, ctx, info) {
		//Check if there is a current user Id
		if (!ctx.request.userId) {
			return null;
		}

		return ctx.db.query.user(
			{
				where: {
					id: ctx.request.userId
				}
			},
			info
		);
	},

	async users(parent, args, ctx, info) {
		//Check if they are logged in
		if (!ctx.request.userId) {
			throw new Error('You must be logged in');
		}
		// Check if the user has the permissions to query all the user
		hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

		// if they do,query all the users

		return ctx.db.query.users({}, info);
	},

	async order(parent, args, ctx, info) {
		//Make sure they are logged in
		if (!ctx.request.userId) {
			throw new Error('You arent logged in');
		}
		//Query the current order

		const order = await ctx.db.query.order(
			{
				where: {
					id: args.id
				}
			},
			info
		);

		//Check if they have permission to see the order

		const ownsOrder = order.user.id === ctx.request.userId;
		const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
			'ADMIN'
		);

		//Return the order
		if (!ownsOrder || !hasPermissionToSeeOrder) {
			throw new Error('Reserved for the Admin');
		}

		return order;
	},
	async orders(parent, args, ctx, info) {
		const { userId } = ctx.request;

		if (!userId) {
			throw new Error('You must be signed in');
		}
		return ctx.db.query.orders(
			{
				where: {
					user: { id: userId }
				}
			},
			info
		);
	}

	/*
	async items(parent, args, ctx, info) {
		const items = await ctx.db.query.items();
		return items;
    }
    */
};

module.exports = Query;
