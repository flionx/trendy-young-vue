<template>
    <label className="switch">
        <input type="checkbox" id='theme' name='theme' 
          :checked="(theme === 'light')"
          @change="theme = (theme === 'light') ? 'dark' : 'light'"
        />
        <span className="slider round"></span>
    </label>
</template>

<script setup>
const theme = defineModel('theme');
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 25px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gray-dark-text);

  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 19px;
  width: 19px;
  left: 2px;
  bottom: 3.5px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #ccc;

}

input:focus + .slider {
  box-shadow: 0 0 1px var(--gray-light-text);
}

input:checked + .slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>