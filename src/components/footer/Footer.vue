<template>
    <footer id="footer">
        <div class="paging">LOADING...</div>
        <div class="progress">
            <progress id="page-progress" v-bind:value="value" v-bind:min="min" v-bind:max="max"></progress>
        </div>
    </footer>
</template>

<script>
import Vue from 'vue';

Vue.prototype.EventBus = new Vue();

export default {
    data(){
        return {
            value : "1",
			min : "1",
			max: "",
        }
	},
	mounted(){
		//max값 설정
		this.max = document.getElementsByClassName('page-common').length;
		const self = this;
		//프로그래스바 값 변경
		this.EventBus.$on('setProgress', function(index){
			self.value = index;
		});
	},
    methods : {
		// progress bar function
		
    }
}
</script>

<style lang="scss" scoped>
/**
 * Footer
 */
#footer {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10;

	.paging {
		display: inline-block;
		margin: 0 0 10px 10px;
		padding: 5px 9px;
		width: auto;
		font-size: 12px;
		color: #fff;
		line-height: 15px;
		letter-spacing: -0.17px;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 12.5px;
	}

	.progress {
		font-size: 0;
		line-height: 0;
		height: 5px;
		box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.1);

		progress[value] {
			width: 100%;
			height: 5px;
			-webkit-appearance: none;
			        appearance: none;

			&::-webkit-progress-bar {
				background: rgba(216, 216, 216, 0.6);
			}

			&::-webkit-progress-value {
				height: 100%;
				background: linear-gradient(90deg, #D5D5D5 44.49%, #606060 97.24%);
				border-radius: 0px 2.5px 2.5px 0px;
				transition: width 0.2s;
			}
		}
	}
}

</style>


