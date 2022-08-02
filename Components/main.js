const dataObj = {}
const methodsObj = {}

let app = Vue.createApp({
	data: function() {return dataObj},
	methods: function() {return methodsObj}
})

app.component('login-form', {
	template: `
		<form @submit.prevent="handleSubmit">
			<h1>{{ title }}</h1>
			<custom-input
				v-for="(i, x) in inputs"
				:key='x'
				v-model='i.value' 
				:label='i.label'
				:type='i.type'
			/>
			<button>Login</button>
		</form>`,
	data() {return {
		title: 'Login Form',
		inputs: [
			{
				label: 'Email',
				value: '',
				type: 'email'
			},
			{
				label: 'Password',
				value: '',
				type: 'password'
			}
		]
	}},
	components: ['custom-input'],
	methods: {
		handleSubmit() {console.log(this.inputs[0].value, this.inputs[1].value,'submitted')}
	}
})

app.component('custom-input', {
	template:`
		<label>
			{{ label }}
			<input :type='type' v-model='inputValue'>
		</label>
	`,
	props: ['label', 'modelValue', 'type'],
	computed: {
		inputValue: {
			get() {return this.modelValue},
			set(val) {this.$emit('update:modelValue', val)}
		}
	},
	//data() {return {inputValue: ''}}
})



app.mount('#app')

