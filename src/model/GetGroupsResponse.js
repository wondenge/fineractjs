

import ApiClient from '../ApiClient';
import GetGroupsPageItems from './GetGroupsPageItems';

/**
 * The GetGroupsResponse model module.
 * @module model/GetGroupsResponse
 * @version 1.0
 */
class GetGroupsResponse {
    /**
     * Constructs a new <code>GetGroupsResponse</code>.
     * GetGroupsResponse
     * @alias module:model/GetGroupsResponse
     */
    constructor() { 
        
        GetGroupsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsResponse} obj Optional instance to populate.
     * @return {module:model/GetGroupsResponse} The populated <code>GetGroupsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetGroupsPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetGroupsResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsPageItems>} pageItems
 */
GetGroupsResponse.prototype['pageItems'] = undefined;






export default GetGroupsResponse;

