import { test as baseTest } from '../fixtures/pom-fixture';
import CommonUtils from '../utils/CommonUtils';


type CommonFixturesType = {
    commonUtils: CommonUtils;
}


export const test = baseTest.extend<CommonFixturesType>({
    commonUtils: async({}, use) => {
        use(new CommonUtils());
    }
});