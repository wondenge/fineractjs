

import ApiClient from '../ApiClient';
import GetLoansLoanIdResponse from './GetLoansLoanIdResponse';

/**
 * The GetLoansResponse model module.
 * @module model/GetLoansResponse
 * @version 1.0
 */
class GetLoansResponse {
    /**
     * Constructs a new <code>GetLoansResponse</code>.
     * GetLoansResponse
     * @alias module:model/GetLoansResponse
     */
    constructor() { 
        
        GetLoansResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansResponse} obj Optional instance to populate.
     * @return {module:model/GetLoansResponse} The populated <code>GetLoansResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetLoansLoanIdResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetLoansResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetLoansLoanIdResponse>} pageItems
 */
GetLoansResponse.prototype['pageItems'] = undefined;






export default GetLoansResponse;

