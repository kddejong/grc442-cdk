import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as s3 from 'aws-cdk-lib/aws-s3';
// import { NagSuppressions } from 'cdk-nag';
import { MySecureBucket } from './constructs';

export class Grc442CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new MySecureBucket(this, 'bucket', {})

  }
}
