

import ApiClient from '../ApiClient';
import GetAccountOptions from './GetAccountOptions';

/**
 * The GetFromAccountOptions model module.
 * @module model/GetFromAccountOptions
 * @version 1.0
 */
class GetFromAccountOptions {
    /**
     * Constructs a new <code>GetFromAccountOptions</code>.
     * @alias module:model/GetFromAccountOptions
     */
    constructor() { 
        
        GetFromAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetFromAccountOptions} The populated <code>GetFromAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromAccountOptions();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = GetAccountOptions.constructFromObject(data['accountType']);
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} accountId
 */
GetFromAccountOptions.prototype['accountId'] = undefined;

/**
 * @member {Number} accountNo
 */
GetFromAccountOptions.prototype['accountNo'] = undefined;

/**
 * @member {module:model/GetAccountOptions} accountType
 */
GetFromAccountOptions.prototype['accountType'] = undefined;

/**
 * @member {Number} clientId
 */
GetFromAccountOptions.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetFromAccountOptions.prototype['clientName'] = undefined;

/**
 * @member {Number} officeId
 */
GetFromAccountOptions.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetFromAccountOptions.prototype['officeName'] = undefined;






export default GetFromAccountOptions;

