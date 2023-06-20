import React from 'react'
import { useState } from 'react'

const toLearn = ['react', 'vue', 'webpack', 'nodejs']

const TextComponent = () => <div> hello , i am function component </div>

export default function Index() {
  const [status, setStatus] = useState(false) /* 状态 */
  const renderFoot = () => <div> i am foot</div>
  const testCreate = () => React.createElement('p', null, ' hello,React ')
  const controlRender = () => {
    const reactElement = (
      /* 以下都是常用的jsx元素节 */
      <div style={{ marginTop: '100px' }}>
        {/* element 元素类型 */}
        <div>hello,world</div>
        {/* fragment 类型 */}
        <React.Fragment>
          <div> 👽👽 </div>
        </React.Fragment>
        {/* text 文本类型 */}
        my name is alien
        {/* 数组节点类型 */}
        {toLearn.map(item => (
          <div key={item}>let us learn {item} </div>
        ))}
        {/* 组件类型 */}
        <TextComponent />
        {/* 三元运算 */}
        {status ? <TextComponent /> : <div>三元运算</div>}
        {/* 函数执行 */}
        {renderFoot()}
        {testCreate()}
        <button onClick={() => console.log(controlRender())}>
          打印render后的内容
        </button>
      </div>
    )

    const { children } = reactElement.props;
    console.log(children, 'children')
    
    const flatChildren = React.Children.toArray(children)

    console.log('flatChildren', flatChildren)

    return reactElement;
  }
  return controlRender()
}
