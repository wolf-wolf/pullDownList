##使用三种方法实现自动收起下拉列表

###方法1

在下拉列表展开时，在body上添加遮罩层，通过监听遮罩层的click事件，关闭下拉列表

###方法2

通过在组件的最外层div上添加tabindex=-1，使得div可以监听focus和blur事件，通过ng-blur在组件失去焦点时，关闭下拉列表

###方法3

直接在document上监听click事件，关闭下拉列表