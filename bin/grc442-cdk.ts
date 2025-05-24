#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Grc442CdkStack } from '../lib/grc442-cdk-stack';
//import { AwsSolutionsChecks } from 'cdk-nag';
//import { MyCompanyChecker } from '../lib/aspects';

const app = new cdk.App();

// cdk.Aspects.of(app).add(new MyCompanyChecker());
// cdk.Aspects.of(app).add(new AwsSolutionsChecks());

new Grc442CdkStack(app, 'Grc442CdkStack', {});
