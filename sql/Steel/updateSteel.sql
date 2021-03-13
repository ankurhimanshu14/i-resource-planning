UPDATE steels
SET issuedQty += issued, availableQty = availableQty - issuedQty
WHERE challanNo = ? AND heatNo = ?;