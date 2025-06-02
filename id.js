function makeid(num = 4) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var characters9 = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  
  return `MUQEET~${result}`;
}

async function downloadCreds(sessionId) {  
  try {
    if (!sessionId.startsWith('MUQEET~')) {
      throw new Error('Invalid SESSION_ID: It must start with "MUQEET~"');
    }
