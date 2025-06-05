
import { IAspect } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { checkBucket } from './bucket';

export class MyCompanyChecker implements IAspect {
    public visit(node: IConstruct): void {
        checkBucket(node);
    }
}
