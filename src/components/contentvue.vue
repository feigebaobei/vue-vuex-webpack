<template>
	<div>
		<nav class="nav">
			<ul>
				<li>
					<router-link to='/home'>home</router-link>
				</li>
				<li>
					<router-link to='/page1'>page1</router-link>
				</li>
				<li>
					<router-link to='/page2'>page2</router-link>
				</li>
				<li>
					<router-link to='/page3'>page3</router-link>
				</li>
				<li>
					<router-link to='/page4'>page4</router-link>
				</li>
			</ul>
		</nav class="nav">
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {

			}
		}
	}
</script>