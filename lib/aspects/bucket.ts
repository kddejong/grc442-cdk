
import { Annotations, Aspects, Stack } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';


export function checkBucket(node: IConstruct): void {
    if (node instanceof CfnBucket) {
        node.versioningConfiguration = {
            status: "Enabled",
        }
        if (node.bucketEncryption == undefined) {
            Annotations.of(node).addError('MyCompanyChecker: BucketEncryption is required');
            return;
        }
        const encryption = Stack.of(node).resolve(node.bucketEncryption);
        if (encryption.serverSideEncryptionConfiguration == undefined) {
            Annotations.of(node).addError('MyCompanyChecker: ServerSideEncryptionConfiguration is required');
            return;
        }
        const sse = Stack.of(node).resolve(
            encryption.serverSideEncryptionConfiguration
        );

        for (const rule of sse) {
            const defaultEncryption = Stack.of(node).resolve(
                rule.serverSideEncryptionByDefault
            );
            if (defaultEncryption == undefined) {
                Annotations.of(node).addError('MyCompanyChecker: ServerSideEncryptionByDefault is required');
            }
            const sseAlgorithm = Stack.of(node).resolve(
                defaultEncryption.sseAlgorithm
            )
            if (sseAlgorithm != 'aws:kms') {
                Annotations.of(node).addError('MyCompanyChecker: SSEAlgorithm is not "aws:kms"');
            }
        }
    }
}




            