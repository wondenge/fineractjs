

import ApiClient from '../ApiClient';

/**
 * The DeleteFinancialActivityAccountsResponse model module.
 * @module model/DeleteFinancialActivityAccountsResponse
 * @version 1.0
 */
class DeleteFinancialActivityAccountsResponse {
    /**
     * Constructs a new <code>DeleteFinancialActivityAccountsResponse</code>.
     * DeleteFinancialActivityAccountsResponse
     * @alias module:model/DeleteFinancialActivityAccountsResponse
     */
    constructor() { 
        
        DeleteFinancialActivityAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFinancialActivityAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFinancialActivityAccountsResponse} obj Optional instance to populate.
     * @return {module:model/DeleteFinancialActivityAccountsResponse} The populated <code>DeleteFinancialActivityAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFinancialActivityAccountsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteFinancialActivityAccountsResponse.prototype['resourceId'] = undefined;






export default DeleteFinancialActivityAccountsResponse;

