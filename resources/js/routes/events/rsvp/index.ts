import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\RsvpController::store
 * @see app/Http/Controllers/RsvpController.php:12
 * @route '/events/{event}/rsvp'
 */
export const store = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/events/{event}/rsvp',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RsvpController::store
 * @see app/Http/Controllers/RsvpController.php:12
 * @route '/events/{event}/rsvp'
 */
store.url = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { event: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { event: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    event: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        event: typeof args.event === 'object'
                ? args.event.slug
                : args.event,
                }

    return store.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RsvpController::store
 * @see app/Http/Controllers/RsvpController.php:12
 * @route '/events/{event}/rsvp'
 */
store.post = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RsvpController::store
 * @see app/Http/Controllers/RsvpController.php:12
 * @route '/events/{event}/rsvp'
 */
    const storeForm = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RsvpController::store
 * @see app/Http/Controllers/RsvpController.php:12
 * @route '/events/{event}/rsvp'
 */
        storeForm.post = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\RsvpController::deleteMethod
 * @see app/Http/Controllers/RsvpController.php:18
 * @route '/events/{event}/rsvp'
 */
export const deleteMethod = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/events/{event}/rsvp',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RsvpController::deleteMethod
 * @see app/Http/Controllers/RsvpController.php:18
 * @route '/events/{event}/rsvp'
 */
deleteMethod.url = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { event: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { event: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    event: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        event: typeof args.event === 'object'
                ? args.event.slug
                : args.event,
                }

    return deleteMethod.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RsvpController::deleteMethod
 * @see app/Http/Controllers/RsvpController.php:18
 * @route '/events/{event}/rsvp'
 */
deleteMethod.delete = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\RsvpController::deleteMethod
 * @see app/Http/Controllers/RsvpController.php:18
 * @route '/events/{event}/rsvp'
 */
    const deleteMethodForm = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteMethod.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RsvpController::deleteMethod
 * @see app/Http/Controllers/RsvpController.php:18
 * @route '/events/{event}/rsvp'
 */
        deleteMethodForm.delete = (args: { event: string | { slug: string } } | [event: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteMethod.form = deleteMethodForm
const rsvp = {
    store: Object.assign(store, store),
delete: Object.assign(deleteMethod, deleteMethod),
}

export default rsvp