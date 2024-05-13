// waitSync


function waitSync (delay) {
    const start = Date.now()
    while (Date.now() < start + delay) {}
}

export { waitSync }