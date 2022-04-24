import React from "react";
import {storiesOf} from "@storybook/react";
import {Image, MouseListener, Zone} from "../../index";

storiesOf('Mouse Listener Component',module)
    .add('监听组件介绍',()=>{
        return(
            <>
                <MouseListener id='loleShowComponent'>
                <Zone.Group>
                    <Zone color='primary'>Mouse Listener监听组件需要置于需要监听组件的最外层，一般是直接用MouseListener包裹整个页面以实现单页面全局监听</Zone>
                    <Zone>Mouse Listener的id属性是必填项，但是正常情况下组件会通过ref回调获取组件实例，只有极少数特殊情况下导致获取失败才会使用id调用组件实例</Zone>
                    <Zone>使用Mouse Listener监听的时候需要在被监听组件上手动添加listen=true属性</Zone>
                    <Zone>若被监听组件在存在子组件的情况下，被Mouse Listener选中，则默认选中当前组件下所有的文本</Zone>
                    <Zone>因为Mouse Listener会覆盖正常的鼠标逻辑，所以用户无法通过左键拖选的形式选择文本，也无法通过右键点击的形式进行手动复制。若需要复制文本则在鼠标点击拖动后anCtrl+C即可</Zone>
                    <Zone>大量使用Mouse Listener会增加浏览器渲染压力，并不推荐广泛添加监听组件，务必在需要使用的时候再尝试使用</Zone>
                    <Zone>如想向原生标签添加监听，可以手动给其添加className='listen'</Zone>
                </Zone.Group>

                <Zone color='primary'>
                    你可以在下面的文本中进行尝试
                </Zone>

                <Zone.Group>
                    <Zone basic color='primary'>
                        <h1>《圣经》</h1>
                    </Zone>

                    <Zone basic listen>
                        我好想做嘉然小姐的狗啊。
                    </Zone>
                    <Zone basic>
                        可是嘉然小姐说她喜欢的是猫，我哭了。<br/>

                        我知道既不是狗也不是猫的我为什么要哭的。因为我其实是一只老鼠。<br/>

                        我从没奢望嘉然小姐能喜欢自己。我明白的，所有人都喜欢理解余裕上手天才打钱的萌萌的狗狗或者猫猫，没有人会喜欢阴湿带病的老鼠。<br/>
                    </Zone>

                    <Zone basic>
                        但我还是问了嘉然小姐:“我能不能做你的狗？”<br/>

                        我知道我是注定做不了狗的。但如果她喜欢狗，我就可以一直在身边看着她了，哪怕她怀里抱着的永远都是狗。<br/>
                    </Zone>

                    <Zone basic>
                        <div className='listen'>可是她说喜欢的是猫。</div>
                    </Zone>

                    <Zone basic listen>
                        她现在还在看着我，还在逗我开心，是因为猫还没有出现，只有我这老鼠每天蹑手蹑脚地从洞里爬出来，远远地和她对视。<br/>

                        等她喜欢的猫来了的时候，我就该重新滚回我的洞了吧。<br/>

                        但我还是好喜欢她，她能在我还在她身边的时候多看我几眼吗？<br/>

                        嘉然小姐说接下来的每个圣诞夜都要和大家一起过。我不知道大家指哪些人。好希望这个集合能够对我做一次胞吞。<br/>
                    </Zone>

                    <Zone basic>
                        <div className='listen'>猫猫还在害怕嘉然小姐。</div>

                        <div className='listen'>我会去把她爱的猫猫引来的。</div>

                        <div className='listen'>我知道稍有不慎，我就会葬身猫口。</div>

                        <div className='listen'>那时候嘉然小姐大概会把我的身体好好地装起来扔到门外吧。</div>

                        <div className='listen'>那我就成了一包鼠条，嘻嘻。</div>

                        <div className='listen'>我希望她能把我扔得近一点，因为我还是好喜欢她。会一直喜欢下去的。</div>
                    </Zone>

                    <Zone basic listen>
                        我的灵魂透过窗户向里面看去，挂着的铃铛在轻轻鸣响，嘉然小姐慵懒地靠在沙发上，表演得非常温顺的橘猫坐在她的肩膀。壁炉的火光照在她的脸庞，我冻僵的心脏在风里微微发烫。
                    </Zone>



                </Zone.Group>
                </MouseListener>
            </>
        )
    })
