UPDATE steels
SET availableQty = availableQty - issuedQty, issuedQty = receivedQty - availableQty
WHERE challanNo = ? AND heatNo = ?;