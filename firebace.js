<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZP0UPvfCgiiir2zKLMae25dUpVcyP3iw",
  authDomain: "crypto-gainz-3524d.firebaseapp.com",
  databaseURL: "https://crypto-gainz-3524d-default-rtdb.firebaseio.com",
  projectId: "crypto-gainz-3524d",
  storageBucket: "crypto-gainz-3524d.firebasestorage.app",
  messagingSenderId: "270349829717",
  appId: "1:270349829717:web:6e3e2bf25f9ab60b2a76dc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
</script>￼Enter
