import fetch from 'node-fetch';

const STRAVA_CLIENT_SECRET = process.env.strava_client_secret;
const STRAVA_CLIENT_ID = process.env.strava_client_id;

export async function handler (event, context) {
  //...
  if (params.code) {
          // get token!
          let token = await getToken(params.code)
          console.log('token=',token)
          return {
              statusCode : 200,
              body : JSON.stringify({
                  token
              })
          }
      }
  // ...
}

 /* 
 Original API Docs:
 
 curl -X POST https://www.strava.com/api/v3/oauth/token \
  -d client_id=ReplaceWithClientID \
  -d client_secret=ReplaceWithClientSecret \
  -d code=ReplaceWithCode \
  -d grant_type=authorization_code
  */
async function getToken (code) {
  // Translated into node fetch...
    let response = await fetch(
        'https://www.strava.com/api/v3/oauth/token',
    {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(
            {
                client_id : STRAVA_CLIENT_ID,
                client_secret : STRAVA_CLIENT_SECRET,
                code : code,
                grant_type : 'authorization_code'

            }
        )
    }
    );
    let token = await response.json();
    return token;
}