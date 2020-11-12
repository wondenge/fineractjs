

import ApiClient from '../ApiClient';
import GetTaxesComponentsCreditAccount from './GetTaxesComponentsCreditAccount';
import GetTaxesComponentsCreditAccountType from './GetTaxesComponentsCreditAccountType';

/**
 * The GetTaxesComponentsResponse model module.
 * @module model/GetTaxesComponentsResponse
 * @version 1.0
 */
class GetTaxesComponentsResponse {
    /**
     * Constructs a new <code>GetTaxesComponentsResponse</code>.
     * GetTaxesComponentsResponse
     * @alias module:model/GetTaxesComponentsResponse
     */
    constructor() { 
        
        GetTaxesComponentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTaxesComponentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTaxesComponentsResponse} obj Optional instance to populate.
     * @return {module:model/GetTaxesComponentsResponse} The populated <code>GetTaxesComponentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTaxesComponentsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('creditAccountType')) {
                obj['creditAccountType'] = GetTaxesComponentsCreditAccountType.constructFromObject(data['creditAccountType']);
            }
            if (data.hasOwnProperty('creditAccount')) {
                obj['creditAccount'] = GetTaxesComponentsCreditAccount.constructFromObject(data['creditAccount']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('taxComponentsHistories')) {
                obj['taxComponentsHistories'] = ApiClient.convertToType(data['taxComponentsHistories'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTaxesComponentsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetTaxesComponentsResponse.prototype['name'] = undefined;

/**
 * @member {Number} percentage
 */
GetTaxesComponentsResponse.prototype['percentage'] = undefined;

/**
 * @member {module:model/GetTaxesComponentsCreditAccountType} creditAccountType
 */
GetTaxesComponentsResponse.prototype['creditAccountType'] = undefined;

/**
 * @member {module:model/GetTaxesComponentsCreditAccount} creditAccount
 */
GetTaxesComponentsResponse.prototype['creditAccount'] = undefined;

/**
 * @member {Date} startDate
 */
GetTaxesComponentsResponse.prototype['startDate'] = undefined;

/**
 * @member {Array.<Object>} taxComponentsHistories
 */
GetTaxesComponentsResponse.prototype['taxComponentsHistories'] = undefined;






export default GetTaxesComponentsResponse;

