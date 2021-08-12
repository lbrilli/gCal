export const create = event => (
    $.ajax ({
        method: 'POST',
        url: 'api/events',
        data: { event }
    })
)

export const update = event => (
    $.ajax ({
        method: 'PATCH',
        url: `/api/events/${event.id}`,
        data: { event }
    })
)

export const destroy = event => (
    $.ajax ({
        method: 'DELETE',
        url: `/api/events/${event.id}`,
        data: { event }
    })
)

export const show = event => (
    $.ajax({
        method: 'GET',
        url: `/api/events/${event.id}`,
    })
)
