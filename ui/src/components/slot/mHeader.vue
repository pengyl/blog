<template>
    <div class="page-header" :class="{'row': showBackBtn}">
        <div :class="{'col-sm-11 col-xs-10': showBackBtn}">
            <!-- BEGIN PAGE TITLE-->
            <h1 class="page-title">{{title}}
                <br v-show="isLineBreak"/>
                <small>{{description}}</small>
            </h1>
            <!-- END PAGE TITLE-->
        </div>
        <div v-if="showBackBtn" class="col-sm-1 col-xs-2 textalignR">
            <a class="back-btn" @click="handleClick">
                <i class="fa fa-arrow-circle-left"></i>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            'title': {
                type: String,
                default: ''
            },
            'description': {
                type: String,
                default: ''
            },
            'isLineBreak': {
                type: Boolean,
                default: true
            },
            'showBackBtn': {
                type: Boolean,
                default: false
            },
            'isResetFunc': {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick() {
                this.$emit('backBtnClick');
                if (!this.isResetFunc) {
                    this.$router.go(-1);
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .page-header {
        padding: 20px;
        margin: -25px -20px 20px;
        border: 0;
        background: #f3f3f3;

    >
    [class*=col-] {
        padding: 0;
    }

    .page-title {
        margin: 0;
        font-weight: normal;
    }

    .back-btn {
        font-size: 40px;
        line-height: 40px;
    }

    }
</style>
