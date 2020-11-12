

import ApiClient from '../ApiClient';
import PutFinancialActivityAccountscommentsSwagger from './PutFinancialActivityAccountscommentsSwagger';

/**
 * The PutFinancialActivityAccountsResponse model module.
 * @module model/PutFinancialActivityAccountsResponse
 * @version 1.0
 */
class PutFinancialActivityAccountsResponse {
    /**
     * Constructs a new <code>PutFinancialActivityAccountsResponse</code>.
     * PutFinancialActivityAccountsResponse
     * @alias module:model/PutFinancialActivityAccountsResponse
     */
    constructor() { 
        
        PutFinancialActivityAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFinancialActivityAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFinancialActivityAccountsResponse} obj Optional instance to populate.
     * @return {module:model/PutFinancialActivityAccountsResponse} The populated <code>PutFinancialActivityAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFinancialActivityAccountsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = PutFinancialActivityAccountscommentsSwagger.constructFromObject(data['comments']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutFinancialActivityAccountsResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutFinancialActivityAccountscommentsSwagger} comments
 */
PutFinancialActivityAccountsResponse.prototype['comments'] = undefined;






export default PutFinancialActivityAccountsResponse;

