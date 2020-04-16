export function get() {
    const auditData = document.querySelector('#audit-data')
    if (auditData) {
        return getData()
    }

    function getData() {
        const audits = [...auditData.querySelectorAll('input')]

        return audits.map(audit => {
            return {
                name: audit.name,
                value: parseInt(audit.value)
            }
        })
    }
}