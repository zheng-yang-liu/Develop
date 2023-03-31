<template>
    <div>
        <div>
            <div class="father">
                <div class="father-child-one">
                    father-child-one
                    <div class="father-child-child-one">father-child-child-one</div>
                    <div class="father-child-child-two">father-child-child-two</div>
                </div>
                    
                <div class="father-child-two">
                    father-child-one
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    $color:red;
    .father{
        border: 2px solid $color;
        width: 50%;
        div{
            width: 50%;
            min-height: 100px;
            margin: 20px;
            border: 2px solid green;
            
        }
        .father-child-child-two{
            color: aqua;
        }
        .father-child-one{
            color:rgb(239, 136, 10);
            // div:last-child {
            //     border: 3px solid red;
            // }
            div:last-child {
                border: 3px solid red; 
            }
        }
    }
</style>