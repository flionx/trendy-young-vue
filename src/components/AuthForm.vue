<script setup>
import { computed, ref } from 'vue';
import MiddleTitle from './text/MiddleTitle.vue';
import RegularText from './text/RegularText.vue';
import { useModalInfo } from '@/hooks/useModalInfo';
import ModalInfo from './ui/ModalInfo.vue';

const isAuthForm = defineModel('isAuthForm');
const isLogin = ref(true);
const mainText = computed(() => isLogin.value ? 'Log in' : 'Sign up');
const reverseMainText = computed(() => isLogin.value ? 'Sign up' : 'Log in');

const login = ref('');
const password = ref('');
const {modalInfo, setModalInfo} = useModalInfo();

function validateUsersInput(login, password) {
    if (!login.trim() || !password.trim()) {
        setModalInfo('Please fill in all fields', '');
        return false;
    }
    if (password.length < 6) {
        setModalInfo('Password must contain at least 6 characters', '');
        return false;
    }
    return true;
}

function loginUser() {
    if (validateUsersInput(login.value, password.value)) {
        console.log('LOGIN');
    }
}
async function createUser() {
    if (validateUsersInput(login.value, password.value)) {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({ 
                login: login.value,
                password: password.value 
            })
        })
        console.log(response);
    }
}
</script>

<template>
    <div class="bg" @click.self="isAuthForm = false">
        <dialog open>
            <h2><MiddleTitle>{{ mainText }}</MiddleTitle></h2>
            <div class="column">
                <label for="login"><RegularText>Login</RegularText></label>
                <input type="login" 
                    name="login" 
                    id="login"
                    placeholder="Enter login"
                    v-model="login"
                >
            </div>
            <div class="column">
                <label for="password"><RegularText>Password</RegularText></label>
                <input type="password" 
                    name="password" 
                    id="password"
                    placeholder="Enter password"
                    v-model="password"
                >
                <button v-if="isLogin" class="small-text forgot">Forgot password</button>
            </div>
            <button class="submit" 
                @click="isLogin ? loginUser() : createUser()">
                {{ mainText }}
            </button>
            <div class="or">
                <span>or</span>
                <div class="line"></div>
            </div>
            <button class="submit">
                <span class="google"></span>
                {{ mainText }} with Google
            </button>
            <p class="small-text mt30">
                {{ isLogin ? "You don't have an account?" : 'Already have an account?' }}
                <button 
                    @click="isLogin = !isLogin">
                    {{ reverseMainText}}
                </button>
            </p>
            <ModalInfo v-if="modalInfo.show" 
                v-model:isOpen="modalInfo.show"
                :className="modalInfo.className">
                {{modalInfo.text}}
            </ModalInfo>
        </dialog>
    </div>
</template>

<style scoped>
.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: rgba(24, 24, 24, 0.1);
}
dialog {
    position: relative;
    width: 430px;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid var(--gray-light-text);
    border-radius: 16px;
    padding: 30px 60px;
}
h2 {
    text-align: center;
    margin-bottom: var(--m20px);
    color: black;
}
.column {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-bottom: var(--m20px);
}
input {
    max-width: 400px;
    padding: 12px 18px;
    border-radius: 8px;
    border: 1px solid var(--gray-light);
}
.forgot {
    margin-left: auto;
    background: transparent;
}
.small-text {
    font-weight: 400;
    font-size: 14px;
    color: var(--gray-dark-text);
}
.small-text button{
    font-size: 15px;
    background: transparent;
    color: blue;
}
.small-text button:hover{
    text-decoration: underline;
}
.mt30 {
    margin-top: 30px;
    text-align: center;
}
.or {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 12px 0;
}
.or span {
    position: relative;
    z-index: 2;
    display: inline-block;
    font-weight: 400;
    font-size: 16px;
    color: black;
    background: white;
    padding: 5px 12px;
}
.line {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1.2px;
    background: var(--gray-light);
}
.submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 44px;
    padding: 14px;
    text-align: center;
    border-radius: 8px;
    background: black;
    color: white;
    font-weight: 600;
    column-gap: 10px;
}
.google {
    width: 25px;
    height: 25px;
    background-image: var(--google-url);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>