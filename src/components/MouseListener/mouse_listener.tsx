import React, {FC, useRef} from "react";
import Message from "../Message";

interface BaseMouseListener{
    id:string;
}

const MouseListener:FC<BaseMouseListener> = (props) => {

    const {children, id} = props;
    const mouseRef = useRef<HTMLDivElement|null>(null);

    //const [handle,setHandle] = useState<HTMLElement|null>(document.getElementById(id)!==null?document.getElementById(id):null);

    // @ts-ignore
    let handle:HTMLElement = document.getElementById(id);

    let mx:number = 0;
    let my:number = 0;
    let mleft:number = 0;//左部偏移量
    let mtop:number = 0;//顶部偏移量
    let mflag:boolean = false;
    let arrNodes: any = [];//存储页面上所有lole元素
    let handleDiv:any = null;


    const onMouseDownFC = (e:React.MouseEvent) => {
        //只监听左键
        if (e.button === 0){
          /*  console.log(mouseRef.current)*/

            if(mouseRef.current === null || mouseRef.current === undefined)
                (handle as any) = document.getElementById(id);

            (handle as any) = mouseRef.current;

            if (arrNodes.length!==0){
                for (let i = 0;i<arrNodes.length;i++){
                    arrNodes[i].style.background = 'none';
                }
            }

            /*const removeCV = document.querySelectorAll("div[class*='CV']");
            if (removeCV.length!==0){
                for (const item in removeCV){
                    (item as any).classList.remove('CV');
                }
            }*/

            mx = e.pageX;
            my = e.pageY;
            mleft = (handle as any).offsetLeft;
            mtop = (handle as any).offsetTop;


            mflag = true;

            (handle as any).style.cursor = 'pointer';
            arrNodes = document.querySelectorAll("div[class*='listen']");
        }
    }

    const onMouseMoveFC = (e:React.MouseEvent) => {
        e.preventDefault();
        if (handleDiv!==null)
            { // @ts-ignore
                handle.removeChild(handleDiv);
            }

        if (!mflag)
            return;

        let nx = e.pageX;
        let ny = e.pageY;
        let nleft = 0;
        let ntop = 0;

        handleDiv = document.createElement('div');
        handleDiv.style.position = 'absolute';
        handleDiv.style.border = '1px solid rgba(249,204,226,0.7)';
        handleDiv.style.borderRadius = '3px';
        /**实现四个方向拖动，需要判断
         * */
        if (nx >= mx && ny >= my){
            /**第四象限(相较于正常视角)
             * */
            nleft = nx - (mx - mleft);
            ntop = ny - (my - mtop);
            handleDiv.style.left = mx + 'px';
            handleDiv.style.top = my + 'px';
            handleDiv.style.width = nleft + 'px';
            handleDiv.style.height = ntop + 'px';
        }
        else if (nx >= mx && ny < my){
            /**第一象限
             * */
            nleft = nx - (mx - mleft);
            ntop = (my - mtop) - ny;
            handleDiv.style.left = (nx-nleft) + 'px';
            handleDiv.style.top = ny + 'px';

            handleDiv.style.width = nleft + 'px';
            handleDiv.style.height = ntop + 'px';
        }
        else if (nx < mx && ny < my){
            /**第二象限
             * */
            nleft = (mx - mleft) - nx;
            ntop = (my - mtop) - ny;
            handleDiv.style.left = nx + 'px';
            handleDiv.style.top = (ny) + 'px';

            handleDiv.style.width = nleft + 'px';
            handleDiv.style.height = ntop + 'px';
        }
        else if (nx < mx && ny >= my) {
            /**第三象限
             * */
            nleft = (mx - nleft) - nx;
            ntop = ny - (my - mtop);
            handleDiv.style.left = (mx - nleft) + 'px';
            handleDiv.style.top = my + 'px';
            handleDiv.style.width = nleft + 'px';
            handleDiv.style.height = ntop + 'px';
        }
        handleDiv.style.background = 'rgba(249,204,226,0.15)';
        // @ts-ignore
        handle.appendChild(handleDiv);

        /**判断相交
         * */
        for (let i = 0;i<arrNodes.length;i++){
            const otherNode = arrNodes[i].getBoundingClientRect();
            const node = window.getComputedStyle(arrNodes[i],null)
            const tx1 = otherNode.left;
            const ty1 = otherNode.top;
            if (ty1 > 0){
                const targetWidth = parseInt(node["width"].split('px')[0]);
                const targetHeight = parseInt(node["height"].split('px')[0]);
                let tx2 = tx1 + targetWidth;
                let ty2 = ty1 + targetHeight;


                let mx1 = parseInt(handleDiv.getBoundingClientRect().left);
                let my1 = parseInt(handleDiv.getBoundingClientRect().top);
                let mx2 = mx1 + parseInt(handleDiv.style.width);
                let my2 = my1 + parseInt(handleDiv.style.height);

                let width = Math.min(tx2, mx2) - Math.max(tx1, mx1);
                let height = Math.min(ty2, my2) - Math.max(ty1, my1);
                let stackArea = (width > 0 ? width : 0) * (height > 0 ? height : 0);
                if (stackArea>0){
                    arrNodes[i].style.background = 'rgba(249,204,226,0.4)';
                    arrNodes[i].style.transition = 'background 0.3s';
                    arrNodes[i].classList.add('CV');
                }
                else{
                    arrNodes[i].style.background = 'none';
                    arrNodes[i].classList.remove('CV');
                }

            }

        }
    }

    const onMouseUpFC = (e:React.MouseEvent) => {
        mflag  = false;
        // @ts-ignore
        handle.style.cursor = 'default';


        let canCV = document.getElementsByClassName('CV');
        if (canCV.length !== 0){
            document.onkeydown = (key)=>{
                let keyNum = window.event ? key.keyCode : key.which;

                if (keyNum===67 && key.ctrlKey){
                    //console.log("CV!!!")
                    /**获取canCV中的text内容
                     * */
                    let text = '';
                    for (let i=0;i<canCV.length;i++){
                        // @ts-ignore
                        text += canCV[i].innerText;
                    }
                    navigator.clipboard.writeText(text);
                    Message.info('复制成功');
                }

            }

        }

        if (handleDiv!==null)
            { // @ts-ignore
                handle.removeChild(handleDiv);
            }
        handleDiv = null;
    }

    return(
        <div id={id}
             style={{width:'100vw',height:'100%',zIndex:-1}}
             onMouseDown={onMouseDownFC}
             onMouseMove={onMouseMoveFC}
             onMouseUp={onMouseUpFC}
             ref={mouseRef}
        >
            {
                children
            }
        </div>
    )

}

export default MouseListener;