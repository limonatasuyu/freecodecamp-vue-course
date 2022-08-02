const dataObj = {
	isVisible: false
}
const methodsObj = {
	toggleBox: function() {this.isVisible = !this.isVisible}
}

let app = Vue.createApp({
	data: function() {return dataObj},
	methods: methodsObj,
	mounted() {alert('test')},
	updated() {alert('updated')}
})

app.component('custom-box', {
	template: '<div class="box"></div>',
	unmounted() {alert('box unmounted')}
})


app.mount('#app')

