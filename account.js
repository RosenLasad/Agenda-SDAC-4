(function(){
  "use strict";

  var loginBtn = document.getElementById("loginBtn");

  var accountOverlay = document.getElementById("accountOverlay");
  var closeAccountBtn = document.getElementById("closeAccountBtn");
  var accountModalTitle = document.getElementById("accountModalTitle");
  var accountStatus = document.getElementById("accountStatus");
  var accountGuestView = document.getElementById("accountGuestView");
  var accountUserView = document.getElementById("accountUserView");
  var accountTabLogin = document.getElementById("accountTabLogin");
  var accountTabSignup = document.getElementById("accountTabSignup");
  var accountLoginPane = document.getElementById("accountLoginPane");
  var accountSignupPane = document.getElementById("accountSignupPane");
  var accountLoginEmail = document.getElementById("accountLoginEmail");
  var accountLoginPassword = document.getElementById("accountLoginPassword");
  var accountSignupEmail = document.getElementById("accountSignupEmail");
  var accountSignupPassword = document.getElementById("accountSignupPassword");
  var accountSignupPassword2 = document.getElementById("accountSignupPassword2");
  var btnAccountLogin = document.getElementById("btnAccountLogin");
  var btnAccountSignup = document.getElementById("btnAccountSignup");
  var btnAccountRecover = document.getElementById("btnAccountRecover");
  var btnAccountContinueFreeLogin = document.getElementById("btnAccountContinueFreeLogin");
  var btnAccountContinueFreeSignup = document.getElementById("btnAccountContinueFreeSignup");
  var btnAccountPlanFree = document.getElementById("btnAccountPlanFree");
  var btnAccountPlanPremium = document.getElementById("btnAccountPlanPremium");
  var accountUserEmail = document.getElementById("accountUserEmail");
  var accountUserPlan = document.getElementById("accountUserPlan");
  var accountUserSync = document.getElementById("accountUserSync");
  var accountUserCtaTitle = document.getElementById("accountUserCtaTitle");
  var accountUserCtaText = document.getElementById("accountUserCtaText");
  var btnAccountManagePremium = document.getElementById("btnAccountManagePremium");
  var btnAccountLogout = document.getElementById("btnAccountLogout");

  var accountCurrentTab = "login";

  function callAgendaHook(name, arg){
    try{
      if(window.AgendaApp && typeof window.AgendaApp[name] === "function"){
        window.AgendaApp[name](arg);
      }
    }catch(e){}
  }

  function getIdentityUser(){
    try{
      return window.netlifyIdentity && window.netlifyIdentity.currentUser && window.netlifyIdentity.currentUser();
    }catch(e){
      return null;
    }
  }

  function getIdentityClient(){
    try{
      return window.netlifyIdentity && (window.netlifyIdentity.gotrue || window.netlifyIdentity);
    }catch(e){
      return null;
    }
  }

  function getAccountPlan(user){
    if(!user) return "free";
    var appMeta = user.app_metadata || {};
    var userMeta = user.user_metadata || {};
    var roles = Array.isArray(appMeta.roles) ? appMeta.roles : [];
    var plan = String(appMeta.plan || userMeta.plan || "").toLowerCase();
    if(plan === "premium" || roles.indexOf("premium") !== -1) return "premium";
    return "free";
  }

  function refreshLoginBtn(){
    if(!loginBtn) return;
    var user = getIdentityUser();
    loginBtn.textContent = user ? "Cloud" : "Accesso";
  }

  function setAccountMessage(text, type){
    if(!accountStatus) return;
    if(!text){
      accountStatus.textContent = "";
      accountStatus.className = "accountStatus hidden";
      return;
    }
    accountStatus.textContent = text;
    accountStatus.className = "accountStatus accountStatus--" + (type || "info");
  }

  function setAccountTab(tab){
    accountCurrentTab = tab === "signup" ? "signup" : "login";
    if(accountTabLogin){
      accountTabLogin.classList.toggle("isActive", accountCurrentTab === "login");
      accountTabLogin.setAttribute("aria-selected", accountCurrentTab === "login" ? "true" : "false");
    }
    if(accountTabSignup){
      accountTabSignup.classList.toggle("isActive", accountCurrentTab === "signup");
      accountTabSignup.setAttribute("aria-selected", accountCurrentTab === "signup" ? "true" : "false");
    }
    if(accountLoginPane) accountLoginPane.classList.toggle("hidden", accountCurrentTab !== "login");
    if(accountSignupPane) accountSignupPane.classList.toggle("hidden", accountCurrentTab !== "signup");
  }

  function renderAccountModal(){
    if(!accountOverlay) return;
    var user = getIdentityUser();
    var plan = getAccountPlan(user);

    if(accountModalTitle) accountModalTitle.textContent = user ? "Cloud SDAC" : "Accesso SDAC";
    if(accountGuestView) accountGuestView.classList.toggle("hidden", !!user);
    if(accountUserView) accountUserView.classList.toggle("hidden", !user);

    if(user){
      if(accountUserEmail) accountUserEmail.textContent = user.email || "—";
      if(accountUserPlan) accountUserPlan.textContent = plan === "premium" ? "Cloud SDAC" : "Cloud SDAC";
      if(accountUserSync) accountUserSync.textContent = "Attiva";
      if(accountUserCtaTitle) accountUserCtaTitle.textContent = "Account condiviso SDAC";
      if(accountUserCtaText) accountUserCtaText.textContent = "La sincronizzazione cloud è attiva: questo account può fare da spazio condiviso SDAC per calendario, taccuino e rubrica, così tutti i soci vedono gli stessi dati.";
      if(btnAccountManagePremium) btnAccountManagePremium.textContent = "Gestisci cloud SDAC";
    }else{
      setAccountTab(accountCurrentTab || "login");
    }

    refreshLoginBtn();
  }

  function openAccountModal(tab){
    if(!accountOverlay) return;
    if(tab) setAccountTab(tab);
    setAccountMessage("", "info");
    renderAccountModal();
    accountOverlay.style.display = "flex";
    accountOverlay.setAttribute("aria-hidden", "false");

    setTimeout(function(){
      try{
        if(getIdentityUser()){
          if(btnAccountManagePremium) btnAccountManagePremium.focus();
        }else if(accountCurrentTab === "signup"){
          if(accountSignupEmail) accountSignupEmail.focus();
        }else{
          if(accountLoginEmail) accountLoginEmail.focus();
        }
      }catch(e){}
    }, 30);
  }

  function closeAccountModal(){
    if(!accountOverlay) return;
    accountOverlay.style.display = "none";
    accountOverlay.setAttribute("aria-hidden", "true");
    setAccountMessage("", "info");
  }

  function isAccountModalOpen(){
    return !!(accountOverlay && accountOverlay.style.display === "flex");
  }

  function handlePremiumIntent(){
    if(getIdentityUser()){
      window.alert("La sincronizzazione cloud di SDAC Agenda è già attiva su questo account. Nelle fasi successive possiamo rendere ancora più semplice il flusso dell'account condiviso.");
      return;
    }
    setAccountTab("signup");
    setAccountMessage("Accedi o crea un account SDAC per attivare la sincronizzazione cloud.", "info");
    openAccountModal("signup");
  }

  function handleAccountLogin(){
    var auth = getIdentityClient();
    if(!auth || !auth.login){
      setAccountMessage("Accesso non disponibile in questo momento.", "error");
      return;
    }

    var email = String((accountLoginEmail && accountLoginEmail.value) || "").trim();
    var password = String((accountLoginPassword && accountLoginPassword.value) || "");

    if(!email || !password){
      setAccountMessage("Inserisci email e password.", "error");
      if(!email && accountLoginEmail) accountLoginEmail.focus();
      else if(accountLoginPassword) accountLoginPassword.focus();
      return;
    }

    setAccountMessage("Accesso in corso...", "info");
    auth.login(email, password, true).then(function(){
      setAccountMessage("Accesso effettuato.", "success");
      renderAccountModal();
      refreshLoginBtn();
    }).catch(function(error){
      var msg = (error && ((error.json && error.json.error_description) || error.message)) || "Accesso non riuscito.";
      setAccountMessage(msg, "error");
    });
  }

  function handleAccountSignup(){
    var auth = getIdentityClient();
    if(!auth || !auth.signup){
      setAccountMessage("Registrazione non disponibile in questo momento.", "error");
      return;
    }

    var email = String((accountSignupEmail && accountSignupEmail.value) || "").trim();
    var password = String((accountSignupPassword && accountSignupPassword.value) || "");
    var password2 = String((accountSignupPassword2 && accountSignupPassword2.value) || "");

    if(!email || !password || !password2){
      setAccountMessage("Compila tutti i campi per creare l'account.", "error");
      return;
    }
    if(password !== password2){
      setAccountMessage("Le password non coincidono.", "error");
      if(accountSignupPassword2) accountSignupPassword2.focus();
      return;
    }
    if(password.length < 6){
      setAccountMessage("Scegli una password di almeno 6 caratteri.", "error");
      if(accountSignupPassword) accountSignupPassword.focus();
      return;
    }

    setAccountMessage("Creazione account in corso...", "info");
    auth.signup(email, password).then(function(){
      setAccountMessage("Account creato. Controlla la tua email per confermare la registrazione, poi accedi a SDAC Agenda.", "success");
      setAccountTab("login");
      if(accountLoginEmail) accountLoginEmail.value = email;
      if(accountLoginPassword) accountLoginPassword.value = "";
    }).catch(function(error){
      var msg = (error && ((error.json && error.json.msg) || (error.json && error.json.error_description) || error.message)) || "Registrazione non riuscita.";
      setAccountMessage(msg, "error");
    });
  }

  function handleAccountRecovery(){
    var auth = getIdentityClient();
    if(!auth || !auth.requestPasswordRecovery){
      setAccountMessage("Recupero password non disponibile in questo momento.", "error");
      return;
    }

    var email = "";
    if(accountCurrentTab === "signup"){
      email = String((accountSignupEmail && accountSignupEmail.value) || "").trim();
    } else {
      email = String((accountLoginEmail && accountLoginEmail.value) || "").trim();
    }

    if(!email){
      setAccountMessage("Inserisci la tua email per ricevere il link di recupero.", "error");
      if(accountCurrentTab === "signup" && accountSignupEmail) accountSignupEmail.focus();
      else if(accountLoginEmail) accountLoginEmail.focus();
      return;
    }

    setAccountMessage("Invio email di recupero...", "info");
    auth.requestPasswordRecovery(email).then(function(){
      setAccountMessage("Ti abbiamo inviato un'email per reimpostare la password.", "success");
    }).catch(function(error){
      var msg = (error && ((error.json && error.json.msg) || (error.json && error.json.error_description) || error.message)) || "Invio email non riuscito.";
      setAccountMessage(msg, "error");
    });
  }

  function handleAccountLogout(){
    if(!window.netlifyIdentity || !window.netlifyIdentity.logout) return;
    window.netlifyIdentity.logout().then(function(){
      setAccountMessage("Sei uscito dal tuo account.", "success");
      renderAccountModal();
    }).catch(function(){
      setAccountMessage("Logout non riuscito.", "error");
    });
  }

  window.AgendaAccount = {
    open: openAccountModal,
    close: closeAccountModal,
    isOpen: isAccountModalOpen
  };

  if (window.netlifyIdentity) {
    if(loginBtn){
      loginBtn.addEventListener("click", function(){
        openAccountModal("login");
      });
    }

    if(accountTabLogin) accountTabLogin.addEventListener("click", function(){ setAccountTab("login"); });
    if(accountTabSignup) accountTabSignup.addEventListener("click", function(){ setAccountTab("signup"); });
    if(closeAccountBtn) closeAccountBtn.addEventListener("click", closeAccountModal);
    if(btnAccountLogin) btnAccountLogin.addEventListener("click", handleAccountLogin);
    if(btnAccountSignup) btnAccountSignup.addEventListener("click", handleAccountSignup);
    if(btnAccountRecover) btnAccountRecover.addEventListener("click", handleAccountRecovery);
    if(btnAccountContinueFreeLogin) btnAccountContinueFreeLogin.addEventListener("click", closeAccountModal);
    if(btnAccountContinueFreeSignup) btnAccountContinueFreeSignup.addEventListener("click", closeAccountModal);
    if(btnAccountPlanFree) btnAccountPlanFree.addEventListener("click", closeAccountModal);
    if(btnAccountPlanPremium) btnAccountPlanPremium.addEventListener("click", handlePremiumIntent);
    if(btnAccountManagePremium) btnAccountManagePremium.addEventListener("click", handlePremiumIntent);
    if(btnAccountLogout) btnAccountLogout.addEventListener("click", handleAccountLogout);

    if(accountOverlay){
      accountOverlay.addEventListener("click", function(ev){
        if(ev.target === accountOverlay) closeAccountModal();
      });
    }

    if(accountLoginPassword){
      accountLoginPassword.addEventListener("keydown", function(ev){
        if(ev.key === "Enter") handleAccountLogin();
      });
    }
    if(accountSignupPassword2){
      accountSignupPassword2.addEventListener("keydown", function(ev){
        if(ev.key === "Enter") handleAccountSignup();
      });
    }

    window.netlifyIdentity.on("init", function(user){
      refreshLoginBtn();
      renderAccountModal();
      callAgendaHook("onIdentityInit", user);
    });

    window.netlifyIdentity.on("login", function(user){
      refreshLoginBtn();
      renderAccountModal();
      callAgendaHook("onIdentityLogin", user);
    });

    window.netlifyIdentity.on("logout", function(){
      refreshLoginBtn();
      renderAccountModal();
      callAgendaHook("onIdentityLogout");
    });

    window.netlifyIdentity.on("error", function(err){
      var msg = (err && ((err.json && err.json.error_description) || err.message)) || "Operazione non riuscita.";
      setAccountMessage(msg, "error");
    });

    window.netlifyIdentity.init();
  } else if(loginBtn) {
    loginBtn.classList.add("hidden");
  }

  document.addEventListener("keydown", function(ev){
    if(ev.key === "Escape" && isAccountModalOpen()){
      closeAccountModal();
    }
  });
})();
