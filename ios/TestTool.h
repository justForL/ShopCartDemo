//
//  TestTool.h
//  IndexDemo
//
//  Created by xianlai on 2018/7/4.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif
@interface TestTool : NSObject<RCTBridgeModule>

@end
