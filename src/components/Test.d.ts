import DefaultIOS from './Test.ios'
import * as ios from './Test.ios'
import DefaultAndroid from './Test.android'
import * as android from './Test.android'

declare var _test: typeof ios
declare var _test: typeof android

declare var _testDefault: typeof DefaultIOS
declare var _testDefault: typeof DefaultAndroid

export default DefaultIOS
export * from './Test.ios'
