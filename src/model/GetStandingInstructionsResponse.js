

import ApiClient from '../ApiClient';
import GetPageItemsStandingInstructionSwagger from './GetPageItemsStandingInstructionSwagger';

/**
 * The GetStandingInstructionsResponse model module.
 * @module model/GetStandingInstructionsResponse
 * @version 1.0
 */
class GetStandingInstructionsResponse {
    /**
     * Constructs a new <code>GetStandingInstructionsResponse</code>.
     * GetStandingInstructionsResponse
     * @alias module:model/GetStandingInstructionsResponse
     */
    constructor() { 
        
        GetStandingInstructionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionsResponse} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionsResponse} The populated <code>GetStandingInstructionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionsResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetPageItemsStandingInstructionSwagger]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetStandingInstructionsResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetPageItemsStandingInstructionSwagger>} pageItems
 */
GetStandingInstructionsResponse.prototype['pageItems'] = undefined;






export default GetStandingInstructionsResponse;

