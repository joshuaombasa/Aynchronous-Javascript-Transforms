let approval = 'Not Approved'
const approvalStatus = document.getElementById("approval-status")

// function getApproval(callback) {
//     setTimeout(() => {
//         approval = 'Approved'
//         callback()
//     },2000)
// }

// getApproval(() => {
//     approvalStatus.textContent = approval
// })

// approvalStatus.textContent = approval


function getApproval() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Approved')
        }, 2000)
    })
}

// getApproval().then(
//     (newApproval) => {
// approvalStatus.textContent = newApproval

//     }
// )

async function setApprovalText() {
    const approvalPromise = getApproval();
    approvalStatus.textContent = await approvalPromise
}

setApprovalText()

approvalStatus.textContent = approval
