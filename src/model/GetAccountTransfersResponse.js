

import ApiClient from '../ApiClient';
import GetAccountTransfersPageItems from './GetAccountTransfersPageItems';

/**
 * The GetAccountTransfersResponse model module.
 * @module model/GetAccountTransfersResponse
 * @version 1.0
 */
class GetAccountTransfersResponse {
    /**
     * Constructs a new <code>GetAccountTransfersResponse</code>.
     * GetAccountTransfersResponse
     * @alias module:model/GetAccountTransfersResponse
     */
    constructor() { 
        
        GetAccountTransfersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersResponse} The populated <code>GetAccountTransfersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetAccountTransfersPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetAccountTransfersResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersPageItems>} pageItems
 */
GetAccountTransfersResponse.prototype['pageItems'] = undefined;






export default GetAccountTransfersResponse;

