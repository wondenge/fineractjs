

import ApiClient from '../ApiClient';
import GetCentersAccountType from './GetCentersAccountType';
import GetCentersCenterIdCurrency from './GetCentersCenterIdCurrency';
import GetCentersCenterIdStatus from './GetCentersCenterIdStatus';
import GetCentersDepositType from './GetCentersDepositType';
import GetCentersTimeline from './GetCentersTimeline';

/**
 * The GetCentersSavingsAccounts model module.
 * @module model/GetCentersSavingsAccounts
 * @version 1.0
 */
class GetCentersSavingsAccounts {
    /**
     * Constructs a new <code>GetCentersSavingsAccounts</code>.
     * @alias module:model/GetCentersSavingsAccounts
     */
    constructor() { 
        
        GetCentersSavingsAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersSavingsAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersSavingsAccounts} obj Optional instance to populate.
     * @return {module:model/GetCentersSavingsAccounts} The populated <code>GetCentersSavingsAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersSavingsAccounts();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetCentersCenterIdStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetCentersCenterIdCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = GetCentersAccountType.constructFromObject(data['accountType']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetCentersTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('depositType')) {
                obj['depositType'] = GetCentersDepositType.constructFromObject(data['depositType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetCentersSavingsAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetCentersSavingsAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetCentersSavingsAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetCentersSavingsAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetCentersCenterIdStatus} status
 */
GetCentersSavingsAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetCentersCenterIdCurrency} currency
 */
GetCentersSavingsAccounts.prototype['currency'] = undefined;

/**
 * @member {module:model/GetCentersAccountType} accountType
 */
GetCentersSavingsAccounts.prototype['accountType'] = undefined;

/**
 * @member {module:model/GetCentersTimeline} timeline
 */
GetCentersSavingsAccounts.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetCentersDepositType} depositType
 */
GetCentersSavingsAccounts.prototype['depositType'] = undefined;






export default GetCentersSavingsAccounts;

