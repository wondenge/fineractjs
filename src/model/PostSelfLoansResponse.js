

import ApiClient from '../ApiClient';

/**
 * The PostSelfLoansResponse model module.
 * @module model/PostSelfLoansResponse
 * @version 1.0
 */
class PostSelfLoansResponse {
    /**
     * Constructs a new <code>PostSelfLoansResponse</code>.
     * PostSelfLoansResponse
     * @alias module:model/PostSelfLoansResponse
     */
    constructor() { 
        
        PostSelfLoansResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansResponse} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansResponse} The populated <code>PostSelfLoansResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostSelfLoansResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostSelfLoansResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
PostSelfLoansResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostSelfLoansResponse.prototype['resourceId'] = undefined;






export default PostSelfLoansResponse;

