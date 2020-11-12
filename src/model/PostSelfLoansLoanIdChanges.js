

import ApiClient from '../ApiClient';
import PostSelfLoansLoanIdStatus from './PostSelfLoansLoanIdStatus';

/**
 * The PostSelfLoansLoanIdChanges model module.
 * @module model/PostSelfLoansLoanIdChanges
 * @version 1.0
 */
class PostSelfLoansLoanIdChanges {
    /**
     * Constructs a new <code>PostSelfLoansLoanIdChanges</code>.
     * @alias module:model/PostSelfLoansLoanIdChanges
     */
    constructor() { 
        
        PostSelfLoansLoanIdChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansLoanIdChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansLoanIdChanges} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansLoanIdChanges} The populated <code>PostSelfLoansLoanIdChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansLoanIdChanges();

            if (data.hasOwnProperty('status')) {
                obj['status'] = PostSelfLoansLoanIdStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('withdrawnOnDate')) {
                obj['withdrawnOnDate'] = ApiClient.convertToType(data['withdrawnOnDate'], 'String');
            }
            if (data.hasOwnProperty('closedOnDate')) {
                obj['closedOnDate'] = ApiClient.convertToType(data['closedOnDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PostSelfLoansLoanIdStatus} status
 */
PostSelfLoansLoanIdChanges.prototype['status'] = undefined;

/**
 * @member {String} locale
 */
PostSelfLoansLoanIdChanges.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostSelfLoansLoanIdChanges.prototype['dateFormat'] = undefined;

/**
 * @member {String} withdrawnOnDate
 */
PostSelfLoansLoanIdChanges.prototype['withdrawnOnDate'] = undefined;

/**
 * @member {String} closedOnDate
 */
PostSelfLoansLoanIdChanges.prototype['closedOnDate'] = undefined;






export default PostSelfLoansLoanIdChanges;

