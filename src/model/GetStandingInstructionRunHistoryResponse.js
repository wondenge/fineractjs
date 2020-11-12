

import ApiClient from '../ApiClient';
import GetStandingInstructionHistoryPageItemsResponse from './GetStandingInstructionHistoryPageItemsResponse';

/**
 * The GetStandingInstructionRunHistoryResponse model module.
 * @module model/GetStandingInstructionRunHistoryResponse
 * @version 1.0
 */
class GetStandingInstructionRunHistoryResponse {
    /**
     * Constructs a new <code>GetStandingInstructionRunHistoryResponse</code>.
     * GetStandingInstructionRunHistoryResponse
     * @alias module:model/GetStandingInstructionRunHistoryResponse
     */
    constructor() { 
        
        GetStandingInstructionRunHistoryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionRunHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionRunHistoryResponse} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionRunHistoryResponse} The populated <code>GetStandingInstructionRunHistoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionRunHistoryResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetStandingInstructionHistoryPageItemsResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetStandingInstructionRunHistoryResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetStandingInstructionHistoryPageItemsResponse>} pageItems
 */
GetStandingInstructionRunHistoryResponse.prototype['pageItems'] = undefined;






export default GetStandingInstructionRunHistoryResponse;

