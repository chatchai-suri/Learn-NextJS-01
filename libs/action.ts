'use server'

export async function submit(data: FormData) {
  console.log('submited')
  console.log('data=', data)
}

// // URLSearchOarams ===> key ===> value
// // method set, delete, get, has, etc.
// // FormData ===> key ===> value
// // method set, delete, get, has

// const formData = new FormData()
// formData.set('a', '20') // {a: '20'}
// formData.append('a', '8') // {a: ['20', '8']}
// formData.set('a', '6') // {'a', '6'}
// formData.get('a') // '6'

export async function submitWithActionState(prevState: {message: string}, formData: FormData) {
  await new Promise(resolve => setTimeout(() => resolve(''), 5000))
  console.log('prevState ====',prevState)
  return {message: prevState.message + 'a'}
}
