let dataObj = {
	greeting: 'Hello Vue 3',
	isVisible: false,
}

methodsObj = {
	toggleBox() {this.isVisible = !this.isVisible},
	greet() {alert(this.greeting)}
}

let app = Vue.createApp({
	data: function() {return dataObj},
	methods: methodsObj
})

app.mount('#app')
