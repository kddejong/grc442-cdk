import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';


export class MyCompanyBucket extends s3.Bucket {
    constructor(scope: Construct, id: string, props?: s3.BucketProps) {

        super(scope, id, {
            ...props,
            versioned: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.KMS_MANAGED,
            enforceSSL: true,
        });
    }
}
