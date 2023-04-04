let approval = 'Not Approved'
const approvalStatus = document.getElementById("approval-status")

function getApproval(callback) {
    setTimeout(() => {
        approval = 'Approved'
        callback()
    },2000)
}

getApproval(() => {
    approvalStatus.textContent = approval
})

approvalStatus.textContent = approval
