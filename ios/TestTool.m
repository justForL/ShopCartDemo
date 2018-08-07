//
//  TestTool.m
//  IndexDemo
//
//  Created by xianlai on 2018/7/4.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "TestTool.h"

@implementation TestTool
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(testFuc:(NSString *)name finished:(RCTPromiseResolveBlock)finish
                  failed:(RCTPromiseRejectBlock)failed) {
  if ([name isEqualToString:@"123"]) {
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    dict[@"code"]=@"200";
    dict[@"data"] = @"ok";
    finish(@"哈哈哈");
    UIAlertController *avc = [UIAlertController alertControllerWithTitle:name message:name preferredStyle:0];
    UIAlertAction *action = [UIAlertAction actionWithTitle:name style:0 handler:nil];

    [avc addAction:action];

    [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:avc animated:YES completion:nil];
    
    
  }else{
    NSError *err;
    failed(@"404",@"找不到",err);
  }
}

RCT_EXPORT_METHOD(getName:(NSString *)name){
  UIAlertController *avc = [UIAlertController alertControllerWithTitle:name message:name preferredStyle:0];
  UIAlertAction *action = [UIAlertAction actionWithTitle:name style:0 handler:nil];
  
  [avc addAction:action];
  
  [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:avc animated:YES completion:nil];
}
@end
