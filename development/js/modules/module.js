export function get() {
    const audits = [...document.querySelectorAll('#audit-data input')]

    return audits.map(audit => {
        return {
            name: audit.name,
            value: parseInt(audit.value)
        }
    })
}