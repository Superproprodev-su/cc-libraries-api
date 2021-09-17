(self.webpackChunkcc_libraries_api=self.webpackChunkcc_libraries_api||[]).push([[843],{32950:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return m}});var t=a(22122),r=a(19756),o=(a(15007),a(64983)),i=a(99536),s=["components"],l={},d={_frontmatter:l},p=i.Z;function m(e){var n=e.components,a=(0,r.Z)(e,s);return(0,o.mdx)(p,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"quick-start-nodejs"},"Quick Start: Node.js"),(0,o.mdx)("p",null,"Welcome to the Creative Cloud Libraries API!"),(0,o.mdx)("p",null,"In this Quick Start tutorial, we'll be walking you towards making your first API call from a Node.js script. By the end you'll have a self-invoking function that makes a call to the Libraries API when you run the script."),(0,o.mdx)("p",null,"This API call will return information about the libraries you have stored in Libraries:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "total_count": 2,\n  "libraries": [\n    /* Your libraries here */\n  ],\n  "_links": {}\n}\n')),(0,o.mdx)("p",null,"By starting with this basic Node.js script, you'll have an idea of what's required to make ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET")," requests to the Libraries API. From there, you can play with the script to make ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET")," requests to different endpoints from Node.js, or translate these concepts to your environment of choice, with Node.js server frameworks like Express and beyond."),(0,o.mdx)("h2",{id:"before-you-start"},"Before you start"),(0,o.mdx)("h3",{id:"technology-used"},"Technology Used"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Node.js"),(0,o.mdx)("li",{parentName:"ul"},"npm"),(0,o.mdx)("li",{parentName:"ul"},"Axios")),(0,o.mdx)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Tutorials")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../setup/developer-credentials/index.md"},"How to get your developer credentials")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../setup/oauth/index.md"},"How to get access tokens with OAuth"))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Assets")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"At least one Library associated with your Adobe ID."),(0,o.mdx)("li",{parentName:"ul"},"A terminal application for a UNIX-based system (like macOS, Linux, or Windows Subsystem for Linux)")),(0,o.mdx)("h2",{id:"development-steps"},"Development Steps"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/cc-libraries-api-samples/tree/main/quick-start-nodejs"},"on GitHub"),".")),(0,o.mdx)("h3",{id:"1-set-up-your-environment-variables"},"1. Set up your environment variables"),(0,o.mdx)("p",null,"The Node.js script we create here will read environment variables from a ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file, so start by creating a file named ",(0,o.mdx)("inlineCode",{parentName:"p"},".env"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"touch .env\necho .env >> .gitignore # Don't track your .env file in version control\n")),(0,o.mdx)("p",null,"In our ",(0,o.mdx)("a",{parentName:"p",href:"../../setup/developer-credentials/index.md"},"How to get your developer credentials")," tutorial, we showed you how to get your API key from the Adobe Developer Console and user access token from the OAuth 2.0 Playground. You can take both of those values and add them to their respective variables in the ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file as seen below. Don't include the angle brackets (",(0,o.mdx)("inlineCode",{parentName:"p"},"< >"),") in your values:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-env"},"API_KEY=<CLIENT_ID_HERE>\nACCESS_TOKEN=<ACCESS_TOKEN_HERE>\n")),(0,o.mdx)("p",null,"Note that we are storing the access token as a value in an ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file for convience in getting started making API calls. Production integrations must support a proper ",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md"},"OAuth workflow")," and should never store user access tokens this way. Always avoid sharing your token or committing it to a public repo."),(0,o.mdx)("h3",{id:"2-install-dependencies"},"2. Install dependencies"),(0,o.mdx)("p",null,"First, we'll create an npm package and install dependencies:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"npm init -y\nnpm install --save axios dotenv\n")),(0,o.mdx)("p",null,"We'll use ",(0,o.mdx)("inlineCode",{parentName:"p"},"axios")," to make HTTP requests, and ",(0,o.mdx)("inlineCode",{parentName:"p"},"dotenv")," to read in our environement variables from the ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file we created in the previous step."),(0,o.mdx)("h3",{id:"3-create-your-javascript-file-and-import-your-dependencies"},"3. Create your JavaScript file and import your dependencies"),(0,o.mdx)("p",null,"Now we create the only JavaScript file we'll need for this basic script example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"touch index.js\n")),(0,o.mdx)("p",null,"At the top of this file, we import the two packages we installed in the previous step:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'require("dotenv").config(); // Read in your .env variables\nconst axios = require("axios");\n')),(0,o.mdx)("p",null,"Your environment variables will now be available on Node.js's ",(0,o.mdx)("inlineCode",{parentName:"p"},"process.env")," object."),(0,o.mdx)("h3",{id:"4-set-up-your-request-headers"},"4. Set up your request headers"),(0,o.mdx)("p",null,"We'll start by focusing on constructing the core API call."),(0,o.mdx)("p",null,"First, we need to set up our headers:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'const options = {\n  headers: {\n    "x-api-key": process.env.API_KEY,\n    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,\n  },\n};\n')),(0,o.mdx)("p",null,"As you can see, we've created an ",(0,o.mdx)("inlineCode",{parentName:"p"},"options")," object with a ",(0,o.mdx)("inlineCode",{parentName:"p"},"headers")," property. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"headers")," property contains key/value fields for our API key and user access token (which are read from Node.js's ",(0,o.mdx)("inlineCode",{parentName:"p"},"process.env")," object)."),(0,o.mdx)("p",null,"The structure of these options is defined by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"axios")," module, which we'll use in the next step to set up our HTTP request."),(0,o.mdx)("h3",{id:"5-set-up-your-api-call"},"5. Set up your API call"),(0,o.mdx)("p",null,"Now all we need to do is write the request itself. We'll do this with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"axios")," module:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'const response = await axios.get(\n  "https://cc-libraries.adobe.io/api/v1/libraries/",\n  options\n);\n')),(0,o.mdx)("p",null,"Here, we're making a GET request, passing in the endpoint (",(0,o.mdx)("inlineCode",{parentName:"p"},"https://cc-libraries.adobe.io/api/v1/libraries/"),"), and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"options")," object containing our headers."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"axios")," module returns promises, so we can opt for async/await syntax, or then/catch chains. Either is fine, but since we've opted for async/await, we'll need to wrap this call in an ",(0,o.mdx)("inlineCode",{parentName:"p"},"async")," function in the next step (unless you're using Node.js 14.3.0 or above, where top-level ",(0,o.mdx)("inlineCode",{parentName:"p"},"await")," is supported)."),(0,o.mdx)("h3",{id:"6-bring-it-all-together"},"6. Bring it all together"),(0,o.mdx)("p",null,"This is the last step, where we'll embellish on the basic setup we've done so far:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Wrap everything in a self-invoking async function\n(async () => {\n  // Set up your request headers\n  const options = {\n    headers: {\n      "x-api-key": process.env.API_KEY,\n      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,\n    },\n  };\n\n  try {\n    // Make your API call\n    const response = await axios.get(baseURL, options);\n    console.log(response.data);\n  } catch (error) {\n    // Catch errors\n    console.log(error.toJSON());\n  }\n})();\n')),(0,o.mdx)("p",null,"A success response will look something like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "total_count": 2,\n  "libraries": [\n    /* Your libraries here */\n  ],\n  "_links": {}\n}\n')),(0,o.mdx)("p",null,"Always check ",(0,o.mdx)("a",{parentName:"p",href:"/cc-libraries-api/api/"},"the references")," for the full details on any request or response."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-tutorials-quick-start-nodejs-index-md-0c178422ca96f02feded.js.map