export const create = calendar => (
    $.ajax ({
        method: 'POST',
        url: 'api/calendars',
        data: {calendar}
    })
)

export const destroy = calendar => (
    $.ajax ({
        method: 'DELETE',
        url: `/api/calendars/${calendar.id}`,
        data: { calendar }
    })
)

export const show = calendar => (
    $.ajax ({
        method: 'GET',
        url: `/api/calendars/${calendar.id}`,
    })
)

export const index = () => (
    $.ajax ({
        method: 'GET',
        url: `/api/calendars/`,
    })
)