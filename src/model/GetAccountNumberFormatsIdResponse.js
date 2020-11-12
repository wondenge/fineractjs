

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetAccountNumberFormatsIdResponse model module.
 * @module model/GetAccountNumberFormatsIdResponse
 * @version 1.0
 */
class GetAccountNumberFormatsIdResponse {
    /**
     * Constructs a new <code>GetAccountNumberFormatsIdResponse</code>.
     * GetAccountNumberFormatsIdResponse
     * @alias module:model/GetAccountNumberFormatsIdResponse
     */
    constructor() { 
        
        GetAccountNumberFormatsIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountNumberFormatsIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountNumberFormatsIdResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountNumberFormatsIdResponse} The populated <code>GetAccountNumberFormatsIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountNumberFormatsIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = EnumOptionData.constructFromObject(data['accountType']);
            }
            if (data.hasOwnProperty('prefixType')) {
                obj['prefixType'] = EnumOptionData.constructFromObject(data['prefixType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountNumberFormatsIdResponse.prototype['id'] = undefined;

/**
 * @member {module:model/EnumOptionData} accountType
 */
GetAccountNumberFormatsIdResponse.prototype['accountType'] = undefined;

/**
 * @member {module:model/EnumOptionData} prefixType
 */
GetAccountNumberFormatsIdResponse.prototype['prefixType'] = undefined;






export default GetAccountNumberFormatsIdResponse;

